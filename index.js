// Map with WeakRef-wrapped values and a FinalizationRegistry
export default class WeakValueMap extends Map {
    constructor() {
        super()
        this.finalizer = new FinalizationRegistry(
            key => super.delete(key)
        )
    }

    get(key) {
        const ref = super.get(key)
        const value = ref && ref.deref()

        // remove entry if reference is no longer valid
        if (ref && !value) super.delete(key)

        return value
    }

    #unregister(ref) {
        const value = ref && ref.deref()
        if (value) this.finalizer.unregister(value)
    }

    set(key, value) {
        // unregister finalizer if an existing value
        this.#unregister(super.get(key))

        // register finalizer for the new value
        this.finalizer.register(value, key, value)

        // store a weak reference to the value
        super.set(key, new WeakRef(value))
        return this
    }

    delete(key) {
        // unregister finalizer if an existing value
        this.#unregister(super.get(key))

        return super.delete(key)
    }

    clear() {
        // unregister finalizer for existing values
        for (const ref of super.values()) this.#unregister(ref)

        return super.clear()
    }
}
