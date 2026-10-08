# Particle Health MCP by usefulapi

Query Particle Health patient records across connected clinical networks. Hosted, no local install.

**Live endpoint:** `https://particlehealth.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://particlehealth.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http particlehealth https://particlehealth.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=particlehealth&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fparticlehealth.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "particlehealth": {
      "url": "https://particlehealth.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/particlehealth/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Particle Health credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `particle_get_patient` | read | Get patient record |
| `particle_search_patient` | read | Search for a patient |
| `particle_get_query_status` | read | Get query status |
| `particle_get_fhir` | read | Get FHIR bundle |
| `particle_get_fhir_by_type` | read | Get FHIR resources by type |
| `particle_get_flat` | read | Get flattened clinical data |
| `particle_get_ccda` | read | Get C-CDA document(s) |
| `particle_search_network_participants` | read | Search network participants |
| `particle_get_patient_documents` | read | List patient documents |
| `particle_submit_patient` | **write** | Submit (register) patient (WRITE) |
| `particle_create_query` | **write** | Create clinical-record query (WRITE) |
| `particlehealth_usage_status` | meta | Usage status (free-tier meter) |
| `particlehealth_upgrade` | meta | Upgrade to Pro (unlimited) |
| `particlehealth_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `particlehealth_upgrade` (it returns a Stripe Checkout link). Cancel any time with `particlehealth_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `particlehealth_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
