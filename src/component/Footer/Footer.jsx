const Footer = () => {
    return (
      <footer className="page-footer amber darken-3 container">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/ZelElizaveta/React-food" target="_blank" rel='noreferrer'>Repo</a>
            </div>
          </div>
      </footer>
    )
}

export default Footer