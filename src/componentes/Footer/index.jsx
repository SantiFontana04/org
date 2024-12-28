import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href="https://www.linkedin.com/in/santiago-fontana-/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/SantiFontana04"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/santi.fontanaa/"><i class="fa-brands fa-instagram"></i></a>
    </div>
    <strong>Santiago Fontana</strong>
</footer>
}

export default Footer