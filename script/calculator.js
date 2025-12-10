(function () {
  // Config
  const R_PER_REFLECTION = 0.98; // 98% reflectivity per bounce (Rigid98)

  // DEFAULT VALUES — ADD THESE
  const defaultAngle = 30;
  const defaultLength = 600;
  const defaultDiam = 343;

  // Grab controls
  const refsEl = document.getElementById("reflections");
  const outEl = document.getElementById("outputPercent");

  function getSelected(name, fallback) {
    const r = document.querySelector('input[name="' + name + '"]:checked');
    return r ? Number(r.value) : fallback;
  }

  function computeAndRender() {
    const angleDeg = getSelected("angle", defaultAngle);
    const L = getSelected("length", defaultLength);
    const D = getSelected("diam", defaultDiam);

    const angleRad = (angleDeg * Math.PI) / 180;
    let tanA = Math.tan(angleRad);

    if (!isFinite(tanA) || angleDeg >= 89.999) {
      refsEl.textContent = "00";
      outEl.textContent = "100%";
      return;
    }

    const R = D / 2;
    const x1 = R * tanA;
    const S = D * tanA;

    let N = 0;

    if (x1 <= L) {
      N = 1 + Math.floor((L - x1) / S);
    }

    const outputPercent = Math.pow(R_PER_REFLECTION, N) * 100;

    refsEl.textContent = String(N).padStart(2, "0");
    outEl.textContent = outputPercent.toFixed(0).padStart(2, "0") + "%";
  }

  document.querySelectorAll("input[type=radio]").forEach((r) => {
    r.addEventListener("change", computeAndRender);
  });

  computeAndRender();
})();
