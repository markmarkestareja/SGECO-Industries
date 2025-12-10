<section class="main-skylight-component">
    <div class="skylight-component-left">
        <button class="tab-button active" data-tab="diffuser">Diffuser</button>
        <button class="tab-button" data-tab="ceiling-frame">Ceiling Frames</button>

    </div>

    <div class="skylight-component-right">
        <div class="tab-content active" id="diffusers">
            <h2>Diffusers</h2>
            <p>SG Eco Industries Inc is a distributor of 4 types of PMMA (Acrylic) diffuser material...</p>
            <img src="diffuser.webp" alt="Diffuser Image" />
        </div>
    </div>
</section>

<script>
    document.addEventListener("DOMContentLoaded", () => {
        const buttons = document.querySelectorAll(".tab-button");
        const contents = document.querySelectorAll(".tab-content");

        buttons.forEach((btn) => {
            btn.addEventListener("click", () => {
                // remove active from all
                buttons.forEach((b) => b.classList.remove("active"));
                contents.forEach((c) => c.classList.remove("active"));

                // add active to clicked button + its content
                btn.classList.add("active");
                document.getElementById(btn.dataset.tab).classList.add("active");
            });
        });
    });

</script>