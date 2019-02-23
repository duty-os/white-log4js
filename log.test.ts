import "./log.ts";

console.log("info");

console.log('String: %s, Int: %d,Float: %f, Object: %o', "zzz", 22, 1.1, {fun: "bar"})


console.info("info");

console.info('String: %s, Int: %d,Float: %f, Object: %o', "zzz", 22, 1.1, {fun: "bar"})


console.warn("info");

console.warn('String: %s, Int: %d,Float: %f, Object: %o', "zzz", 22, 1.1, {fun: "bar"})


console.debug("info");

console.debug('String: %s, Int: %d,Float: %f, Object: %o', "zzz", 22, 1.1, {fun: "bar"})

console.error("info");

console.error('String: %s, Int: %d,Float: %f, Object: %o', "zzz", 22, 1.1, {fun: "bar"})

console.error(new Error("error"))