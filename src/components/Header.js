import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
					<img style={{maxWidth: 70 + '%'}} src="/logo.png" alt="+1 CHATTITUDE Logo" />
                    <h1>Velkommen til  <strong>+1 CHATTITUDE</strong>, en mærkesag fra<br />
                      <a href="http://wonderbai.dk">wonderbai</a>.</h1>
                    <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                    lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                    <ul className="actions">
                        <li><a href="#koncept" className="button scrolly">Koncept</a></li>
						<li><a href="#one" className="button scrolly">Discover</a></li>
						<li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
