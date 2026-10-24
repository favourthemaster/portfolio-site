import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import { PageMeta } from '../components/PageMeta'

export function NotFound() {
  return (
    <>
      <PageMeta
        title="Not found · Favour Nwachukwu"
        description="This page does not exist."
      />
      <div className="page not-found wrap">
        <span className="not-found-code">404</span>
        <h1>This page doesn&apos;t exist.</h1>
        <p>The link may be old, or the page moved. The work page has the rest.</p>
        <Link className="link-arrow" to="/work" style={{ marginTop: 22 }}>
          See the work <ArrowRight size={14} />
        </Link>
      </div>
    </>
  )
}
