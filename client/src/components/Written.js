import React from 'react'

export default function Written(props) {
  const { write } = props;
  return (
    <div>
    <p><code>emon</code><span>&nbsp;</span>so we will just go straight to the practical parts.</p>
    <h2 id="install-node-js-and-npm">Install Node.js and NPM</h2>
    <p>If you haven't yet done so, you'll need to install Node and npm on your machine.</p>
    <ol>
      <li>Go to the<span>&nbsp;</span><a href="https://nodejs.org/en/">Node.js website</a></li>
      <li>Click on the recommended download button</li>
    </ol>
    <figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2021/12/Screenshot-2021-12-13-at-18.52.57.png" class="kg-image" alt="Screenshot-2021-12-13-at-18.52.57" srcset="https://www.freecodecamp.org/news/content/images/size/w600/2021/12/Screenshot-2021-12-13-at-18.52.57.png 600w, https://www.freecodecamp.org/news/content/images/size/w1000/2021/12/Screenshot-2021-12-13-at-18.52.57.png 1000w, https://www.freecodecamp.org/news/content/images/size/w1600/2021/12/Screenshot-2021-12-13-at-18.52.57.png 1600w, https://www.freecodecamp.org/news/content/images/size/w2400/2021/12/Screenshot-2021-12-13-at-18.52.57.png 2400w" sizes="(min-width: 720px) 720px" width="600" height="400" loading="lazy"/>
      <figcaption>Nodejs home page</figcaption>
    </figure>
    <p>When the download is complete, install Node using the downloaded<span>&nbsp;</span><code>.exe</code><span>&nbsp;</span>file (it follows the normal installation process).</p>
    <h3 id="check-if-the-installation-was-successful">Check if the installation was successful</h3>
    <ol>
      <li>Go to your terminal/command prompt<span>&nbsp;</span><em>(run as administrator if possible)</em></li>
      <li>Type in each of the following commands and hit Enter</li>
    </ol>
    <pre class=" language-javascript"><code class=" language-javascript">node <span class="token operator">-</span>v
      npm <span class="token operator">-</span>v
    </code></pre>
    {/* <div dangerouslySetInnerHTML={{ __html: write }} /> */}

  </div>
  )
}
