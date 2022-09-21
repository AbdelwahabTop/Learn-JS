function itsMe() {
    return `Iam A Normal Function`;
}

let t = () => `Iam A Normal Function`;

  console.log(t()); // Iam A Normal Function
/*
function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}*/

let b = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

  console.log(b("https", "elzero", "org")); // https://www.elzero.org