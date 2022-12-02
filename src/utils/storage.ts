class CustomStorage {
  // eslint-disable-next-line no-use-before-define
  public static instance: CustomStorage | null = null

  public myStorage: Map<string, { val: any; exp: number }> = new Map()

  constructor({ clearExpire = true }) {
    for (const [k, p] of Object.entries(localStorage)) {
      if (/_isMystorage/.test(p))
        try {
          const tempPackage = JSON.parse(p)
          if (clearExpire && tempPackage.exp !== -1 && tempPackage.exp <= new Date().getTime()) {
            localStorage.removeItem(k)
          } else this.myStorage.set(k, tempPackage)
        } catch (error) {
          localStorage.removeItem(k)
        }
    }
  }

  /**
   * Set new value to myStorage
   * @param key key
   * @param val value
   * @param exp expiration time
   */
  public set(key: string, val: any, exp: number = -1) {
    if (
      typeof key !== 'string' ||
      typeof exp !== 'number' ||
      Number.isNaN(exp) ||
      new Date(exp).toString() === 'Invalid Date' ||
      (exp !== -1 && new Date().getTime() >= exp)
    )
      return false

    const valPackage = { _isMystorage: true, val, exp }

    try {
      localStorage.setItem(key, JSON.stringify(valPackage))
    } catch (error) {
      localStorage.removeItem(key)
      return false
    }

    this.myStorage.set(key, valPackage)

    return true
  }

  /**
   * Get val
   * @param key key
   */
  public get(key: string) {
    if (typeof key === 'string' && this.myStorage.has(key)) {
      const { exp } = this.myStorage.get(key)!

      if (exp !== -1 && exp <= new Date().getTime()) {
        this.del(key)
        return undefined
      }

      return this.myStorage.get(key)!.val
    }

    return undefined
  }

  /**
   * delete val
   * @param key key
   */
  public del(key: string) {
    if (typeof key === 'string' && this.myStorage.has(key)) {
      this.myStorage.delete(key)
      localStorage.removeItem(key)
      return true
    }

    return false
  }

  /**
   * Check whatever key in myStorage
   * @param key key
   */
  public has(key: string) {
    return this.get(key) !== undefined
  }

  /**
   * Get CustomStorage instance
   * @param options
   */
  public static getInstance(options: { clearAll?: boolean; clearExpire?: boolean }) {
    if (!CustomStorage.instance) {
      CustomStorage.instance = new CustomStorage(options)
    }
    return CustomStorage.instance
  }
}

export default CustomStorage.getInstance({})
