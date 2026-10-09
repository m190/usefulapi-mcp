# DrChrono MCP by usefulapi

Read and write DrChrono patients, appointments, offices and clinical notes. Hosted, no local install.

**Live endpoint:** `https://drchrono.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://drchrono.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http drchrono https://drchrono.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=drchrono&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdrchrono.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "drchrono": {
      "url": "https://drchrono.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your DrChrono credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/drchrono/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **DrChrono credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `drchrono_list_patients` | read | List patients |
| `drchrono_get_patient` | read | Get a patient |
| `drchrono_list_appointments` | read | List appointments |
| `drchrono_list_offices` | read | List offices |
| `drchrono_list_doctors` | read | List doctors |
| `drchrono_list_clinical_notes` | read | List clinical notes |
| `drchrono_list_problems` | read | List problems |
| `drchrono_list_medications` | read | List medications |
| `drchrono_list_allergies` | read | List allergies |
| `drchrono_list_lab_results` | read | List lab results |
| `drchrono_list_lab_orders` | read | List lab orders |
| `drchrono_list_patient_payments` | read | List patient payments |
| `drchrono_list_line_items` | read | List line items |
| `drchrono_create_appointment` | **write** | Create appointment |
| `drchrono_create_patient` | **write** | Create patient |
| `drchrono_usage_status` | meta | Usage status (free-tier meter) |
| `drchrono_request_feature` | meta | Request a missing feature |
| `drchrono_upgrade` | meta | Upgrade to Pro (unlimited) |
| `drchrono_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `drchrono_upgrade` (it returns a Stripe Checkout link). Cancel any time with `drchrono_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `drchrono_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
