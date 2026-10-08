# NexHealth MCP by usefulapi

Read and write NexHealth appointments, patients, providers and locations. Hosted, no local install.

**Live endpoint:** `https://nexhealth.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nexhealth.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nexhealth https://nexhealth.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nexhealth&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnexhealth.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nexhealth": {
      "url": "https://nexhealth.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nexhealth/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **NexHealth credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nexhealth_list_locations` | read | List locations |
| `nexhealth_list_providers` | read | List providers |
| `nexhealth_search_patients` | read | Search patients |
| `nexhealth_get_patient` | read | Get patient |
| `nexhealth_list_appointments` | read | List appointments |
| `nexhealth_get_appointment` | read | Get appointment |
| `nexhealth_list_appointment_slots` | read | List appointment slots |
| `nexhealth_list_appointment_types` | read | List appointment types |
| `nexhealth_list_operatories` | read | List operatories |
| `nexhealth_list_insurance_plans` | read | List insurance plans |
| `nexhealth_list_insurance_coverages` | read | List insurance coverages |
| `nexhealth_list_procedures` | read | List procedures |
| `nexhealth_sync_status` | read | Sync status |
| `nexhealth_create_patient` | **write** | Create patient |
| `nexhealth_book_appointment` | **write** | Book appointment |
| `nexhealth_update_appointment` | **write** | Update appointment |
| `nexhealth_usage_status` | meta | Usage status (free-tier meter) |
| `nexhealth_upgrade` | meta | Upgrade to Pro (unlimited) |
| `nexhealth_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `nexhealth_upgrade` (it returns a Stripe Checkout link). Cancel any time with `nexhealth_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `nexhealth_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
