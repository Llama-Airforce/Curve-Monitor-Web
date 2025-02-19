function i(f,t){const n={...f};for(const e in t)Array.isArray(t[e])?n[e]=[...t[e]]:typeof t[e]=="object"&&t[e]!==null?n[e]=i(n[e],t[e]):n[e]=t[e];return n}export{i as d};
