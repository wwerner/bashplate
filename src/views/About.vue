<template>
  <div class="about section">
    <div class="tile is-ancestor">

      <div class="tile is-vertical">
        <div class="tile is-parent">

          <div class="tile is-child box is-4">
            <p class="title">What?</p>
            <p class="subtitle">What is this thing for?</p>
            Bash Plate lets you generate boilerplate for shell scripts
            that takes care of receiving, parsing, validating and documenting
            script arguments.<br/>
            It is intended to give you a starting point for your scripts that
            is reasonably clean without you having to remember the different possibilities
            and their details for receiving script arguments.<br/>
            <br/>
            <router-link to="/" class=" is-primary button">Go generate!</router-link>
            <p class="is-pulled-right">Written by <a href="https://wolfgang-werner.net">this human</a>.</p>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!-- this is probably not how you do it ... -->
          <div class="tile is-child box">
            <p class="title">Why?</p>
            <p class="subtitle">Why does this thing exist?</p>

            Each time I need to write a shell script
            - which is <em>exactly</em> long enough to forget all the details after writing the last one -
            , I go through a process of thought like the following:
            <ul>
              <li>🧐 "I want this to be reusable, so I'll use proper options & help messages"</li>
              <li>🤔 "Hmmm, was it getopt or getopts? Which was the GNU and which the POSIX one? Shouldn't I use
                argbash?"
              </li>
              <li>😤 "So how does the option spec need to look like? Why is that colon at the start again? Does the
                following option take an argument?"
              </li>
              <li>😩 "How to I test if an argument was set? Reliably and and in a portable manner?"</li>
            </ul>

            <br/>
            Now, I either:
            <ul>
              <li>Copy an old script and fiddle around in it - bad, since there is stuff to remove, I could break things
                and I
                still need to think
              </li>
              <li>Read up on option parsing - bad, as it takes time and I have to decide between getopt, getopts and
                argbash
              </li>
              <li>Just skip parameterizing the script and hard code everything - bad, exactly what I started out
                <em>not</em> to do
              </li>
            </ul>
            <br/>
            So basically, I try to hack myself into writing better scripts.
            <br/>
            If you can relate, give it a spin.

          </div>

        </div>

        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">More</p>
            <p class="subtitle">Some useful references, alternatives and background.</p>
            <ul>
              <li><a href="http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html">
                POSIX style options standard</a></li>
              <li><a href="https://www.gnu.org/prep/standards/html_node/Command_002dLine-Interfaces.html">
                GNU style options standard</a></li>
              <li><a href="http://www.catb.org/esr/writings/taoup/html/ch10s05.html">
                Common option names and semantics by ESR. Read this to pick more intuitive option names.</a></li>
              <li><a href="https://codeburst.io/13-tips-tricks-for-writing-shell-scripts-with-awesome-ux-19a525ae05ae">
                Some tips for writing shell scripts.</a></li>
              <li><a href="https://kvz.io/blog/2013/11/21/bash-best-practices/">
                And some more.</a></li>
              <li>Option parsers for
              <a href="https://github.com/Kotlin/kotlinx.cli">Kotlin</a>,
                <a href="https://picocli.info/">Java (I love picocli)</a>, tbc.
              </li>
            </ul>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>
