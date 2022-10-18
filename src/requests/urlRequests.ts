export const pharmaciesUrl = (): string =>
    import.meta.env.DEV ?
        '/pharmacyNightShift' :
        'https://haru-api.fly.dev/pharmacies'

export const pharmaciesFallbackUrl = 'https://haru-api.onrender.com'
