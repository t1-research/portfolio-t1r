const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Brayden Downey
      <style jsx>{`
        a {
          float: left;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        small {
            color: black;
        }
        }
      `}</style>
    </small>
  )
}
