<nav>
    <a href="#a">Jump to a</a>
    <a href="#b">Jump to b</a>
    <a href="#c">Jump to c</a>
</nav>
<section id="a">
    <h2>Section 1</h2>
</section>
<section id="b">
    <h2>Section 2</h2>
</section>
<section id="c">
    <h2>Section 3</h2>
</section>

<style>
    nav {
        position: sticky;
        top: 8px;
    }
    section {
        width: 100vw;
        height: 100vh;
    }

    :target {
        color: cornflowerblue;
    }
</style>
