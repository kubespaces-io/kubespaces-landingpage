export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800 lg:border-0 lg:pt-0">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2">Frequently asked questions</h2>
          </div>

          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 xl:gap-x-16 lg:gap-y-12">
            <li>
              <h4 className="text-xl font-medium mb-2">What's your pricing model?</h4>
              <p className="text-lg text-gray-400">We will never charge you for the amount of users or namespaces; we apply a fairer pricing scheme based on the amount of resources you need (quotas), and we'll work with you to match your usage with your requested quotas to avoid wasted resources.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How many users can I have?</h4>
              <p className="text-lg text-gray-400">As many as you need. You can connect your identity provider like GitHub or Active Directory and import groups and teams from there, then map them to tenants and namespaces.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Can I try the platform?</h4>
              <p className="text-lg text-gray-400">Yes, in our private beta we will offer you a limited amount of free resources to test the platform and see for yourself if it fits your use cases.</p>
            </li>

          </ul>

        </div>
      </div>
    </section>
  )
}
