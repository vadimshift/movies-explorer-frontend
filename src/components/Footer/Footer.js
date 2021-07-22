import './Footer.css';
const date = new Date().getFullYear();

function Footer() {
  return (
    <section className="footer">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__info-container">
            <p className="footer__copyright">&copy; {date}</p>
                <ul className="footer__links">
                    <li className="footer__links-list">
                        <a href="#" className="footer__link">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__links-list">
                        <a href="#" className="footer__link">Github</a>
                    </li>
                    <li className="footer__links-list">
                        <a href="#" className="footer__link">Facebook</a>
                    </li>
                </ul>
        </div>
    </section>
  );
}

export default Footer;