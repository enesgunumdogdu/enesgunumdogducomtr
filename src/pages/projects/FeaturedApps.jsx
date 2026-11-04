import { AppCard, SectionHeader } from '../../components/ui'
import { apps } from '../../data/site'

// Side projects on the Work page: the shared app card, with each app's
// privacy policy and terms of use linked (app review and users rely on
// these URLs). Live apps link their App Store page.

function FeaturedApps() {
  return (
    <section id="side-projects" className="section section--flush-top" aria-labelledby="apps-title">
      <SectionHeader
        title="Side projects."
        id="apps-title"
        lede="Small apps I make in my own time, each with its own privacy policy and terms."
      />
      <div className="app-grid">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} long showLegal />
        ))}
      </div>
    </section>
  )
}

export default FeaturedApps
