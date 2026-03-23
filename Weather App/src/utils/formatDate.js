function openMeteoTimeToDate(timeIso, utcOffsetSeconds = 0) {
    if (!timeIso) return null;

    if (/[zZ]|[+-]\d{2}:\d{2}$/.test(timeIso)) {
        const d = new Date(timeIso);
        return Number.isNaN(d.getTime()) ? null : d;
    }

    const m = String(timeIso).match(
        /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/
    );
    if (!m) return null;

    const year = Number(m[1]);
    const month = Number(m[2]) - 1;
    const day = Number(m[3]);
    const hour = Number(m[4]);
    const minute = Number(m[5]);
    const second = m[6] ? Number(m[6]) : 0;

    const utcMs = Date.UTC(year, month, day, hour, minute, second) - utcOffsetSeconds * 1000;
    return new Date(utcMs);
}

export function formatOpenMeteoDateLabel({
    timeIso,
    timezone,
    utcOffsetSeconds = 0,
    locale = "en-US",
} = {}) {
    const date = openMeteoTimeToDate(timeIso, utcOffsetSeconds);
    if (!date) return "--";

    const options = {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
        ...(timezone ? { timeZone: timezone } : {}),
    };

    try {
        return new Intl.DateTimeFormat(locale, options).format(date);
    } catch {
        const { timeZone, ...safeOptions } = options;
        return new Intl.DateTimeFormat(locale, safeOptions).format(date);
    }
}