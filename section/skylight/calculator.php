<section class="calculator">
    <div class="calculator-text">
        <h1 class="p-large">Sky Tunnel Rigid98 Tube Reflection and Light Output Calculator</h1>
        <p>To give you an idea of how much extra light a Sky tunnel can provide you, use our Sky Tunnel Rigid98
            calculator below.</p>
    </div>

    <div class="panel">
        <div class="controls" role="region" aria-label="controls">
            <h2>
                Adjust the parameters to simulate the condition of your Sky Tunnel.
            </h2>

            <!-- Angle -->
            <div class="group" id="angleGroup">
                <label class="title">Angle of the Sun</label>
                <div class="options" id="angleOptions">
                    <label class="option"><input type="radio" name="angle" value="30" checked /> 30°</label>
                    <label class="option"><input type="radio" name="angle" value="40" /> 40°</label>
                    <label class="option"><input type="radio" name="angle" value="50" /> 50°</label>
                    <label class="option"><input type="radio" name="angle" value="60" /> 60°</label>
                    <label class="option"><input type="radio" name="angle" value="70" /> 70°</label>
                    <label class="option"><input type="radio" name="angle" value="80" /> 80°</label>
                    <label class="option"><input type="radio" name="angle" value="90" />
                        90°</label>
                </div>
            </div>

            <!-- Length -->
            <div class="group" id="lengthGroup">
                <label class="title">Length of the Tube (mm)</label>
                <div class="options" id="lengthOptions">
                    <label class="option"><input type="radio" name="length" value="600" checked /> 600mm
                        (24")</label>
                    <label class="option"><input type="radio" name="length" value="1200" /> 1200mm
                        (48")</label>
                    <label class="option"><input type="radio" name="length" value="1800" /> 1800mm
                        (72")</label>
                    <label class="option"><input type="radio" name="length" value="2400" /> 2400mm
                        (96")</label>
                    <label class="option"><input type="radio" name="length" value="3000" /> 3000mm
                        (120")</label>
                </div>
            </div>

            <!-- Diameter -->
            <div class="group" id="diamGroup">
                <label class="title">Diameter of the Tube (mm)</label>
                <div class="options" id="diamOptions">
                    <label class="option"><input type="radio" name="diam" value="343" checked /> 343mm
                        (13.5")</label>
                    <label class="option"><input type="radio" name="diam" value="457" /> 457mm
                        (18")</label>
                    <label class="option"><input type="radio" name="diam" value="535" /> 535mm
                        (21")</label>
                </div>
            </div>
        </div>

        <div class="output" role="region" aria-label="output">
            <h3>OUTPUT</h3>

            <div class="metric">
                <div class="label">Number of Reflections:</div>
                <div class="value" id="reflections">00</div>
            </div>

            <div class="metric">
                <div class="label">Output After Reflection:</div>
                <div class="value" id="outputPercent">00%</div>
            </div>
        </div>
    </div>
</section>