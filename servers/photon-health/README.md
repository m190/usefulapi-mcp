# Photon Health MCP by usefulapi

Use [Photon Health](https://www.photon.health) from Claude, Cursor, or any MCP client — read Photon Health patients, prescriptions, orders, pharmacies and medications; screen interactions.
Hosted, no local install: connect with your own Photon Health credentials.

**Live endpoint:** `https://photon-health.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/photon-health

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://photon-health.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http photon-health https://photon-health.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=photon-health&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fphoton-health.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "photon-health": {
      "url": "https://photon-health.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Photon Health credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/photon-health/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Photon client ID, client secret and environment**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `photonhealth_list_patients` | read | List patients |
| `photonhealth_get_patient` | read | Get a patient |
| `photonhealth_list_prescriptions` | read | List prescriptions |
| `photonhealth_get_prescription` | read | Get a prescription |
| `photonhealth_list_orders` | read | List orders |
| `photonhealth_get_order` | read | Get an order |
| `photonhealth_get_fill` | read | Get a fill |
| `photonhealth_search_pharmacies` | read | Search pharmacies |
| `photonhealth_get_pharmacy` | read | Get a pharmacy |
| `photonhealth_search_medications` | read | Search medications |
| `photonhealth_list_medication_products` | read | List medication products |
| `photonhealth_list_medication_packages` | read | List medication packages |
| `photonhealth_get_medication_by_ndc` | read | Look up a medication by NDC |
| `photonhealth_search_medical_equipment` | read | Search medical equipment |
| `photonhealth_list_catalogs` | read | List catalogs |
| `photonhealth_get_catalog` | read | Get a catalog |
| `photonhealth_search_allergens` | read | Search allergens |
| `photonhealth_list_dispense_units` | read | List dispense units |
| `photonhealth_get_organization` | read | Get the organization |
| `photonhealth_list_users` | read | List users |
| `photonhealth_screen_interactions` | read | Screen for drug interactions |
| `photonhealth_usage_status` | meta | Usage status (free-tier meter) |
| `photonhealth_request_feature` | meta | Request a missing feature |
| `photonhealth_upgrade` | meta | Upgrade to Pro (unlimited) |
| `photonhealth_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per organization) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `photonhealth_upgrade` (it returns a Stripe Checkout link). Cancel any time with `photonhealth_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `photonhealth_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Photon Health.
