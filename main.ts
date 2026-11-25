// Entry for make.fun's "Loading Screen Gold: A Tip in 200 Characters"
// bounty: one sharp, funny loading-screen tip, at most 200 characters,
// for stressed developers and AI coding agents. This one lands the
// classic excuse — "it works on my machine" — and then sets that
// machine on fire, so the tip is both a joke and a status report.
// Running the program prints the tip, and nothing else.

/** The tip: the reassurance, the fire, the bucket. */
function jokeLine(): string {
  const setup = "Loading… The code compiled fine on my machine,";
  const twist = "which is currently on fire";
  const request = "— please hold while we find a bucket.";
  return `${setup} ${twist} ${request}`;
}

console.log(jokeLine());
