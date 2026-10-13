import SettingsPanel from './SettingsPanel.jsx'
import PreviewCard from './PreviewCard.jsx'

// Content NO recibe props
function Content() {
  return (
    <main className="grid gap-6 md:grid-cols-2">
      <SettingsPanel />
      <PreviewCard />
    </main>
  )
}

export default Content
