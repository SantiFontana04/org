import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://github.com/SantiFontana04'>
            <img src="/img/instagram.png" alt='GitHub' />
        </a>
        <a href='https://www.linkedin.com/in/santiago-fontana-/'>
            <img src="/img/instagram.png" alt='Linkedin' />
        </a>
        <a href='https://www.instagram.com/santi.fontanaa/'>
            <img src="/img/instagram.png" alt='Instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Santiago Fontana</strong>
</footer>
}

export default Footer