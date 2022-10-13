export const pharmaciesUrl = (): string =>
    import.meta.env.DEV ?
        '/pharmacyNightShift' :
        'https://farmanet.minsal.cl/index.php/ws/getLocalesTurnos'

