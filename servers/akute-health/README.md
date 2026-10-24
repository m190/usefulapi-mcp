# Akute Health MCP by usefulapi

Use [Akute Health](https://www.akutehealth.com) from Claude, Cursor, or any MCP client — read-only access to patients, appointments, availability, tasks, notes, medications, allergies and observations.
Hosted, no local install: connect with your own Akute Health credentials.

**Patient data:** do not use this server with protected health information (PHI). We do not sign HIPAA Business Associate Agreements (BAAs). See https://usefulapi.io/terms/#5-acceptable-use.

**Live endpoint:** `https://akute-health.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/akute-health

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://akute-health.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http akute-health https://akute-health.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=akute-health&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fakute-health.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "akute-health": {
      "url": "https://akute-health.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Akute Health credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/akute-health/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `akutehealth_search_patients` | read | Search patients |
| `akutehealth_get_patient` | read | Get patient |
| `akutehealth_list_appointments` | read | List appointments |
| `akutehealth_get_appointment` | read | Get appointment |
| `akutehealth_list_appointment_types` | read | List appointment types |
| `akutehealth_get_availability` | read | Get practitioner availability |
| `akutehealth_list_tasks` | read | List tasks |
| `akutehealth_get_task` | read | Get task |
| `akutehealth_list_notes` | read | List clinical notes |
| `akutehealth_get_note` | read | Get clinical note |
| `akutehealth_list_medications` | read | List patient medications |
| `akutehealth_list_allergies` | read | List patient allergies |
| `akutehealth_list_observations` | read | List patient observations |
| `akutehealth_list_practitioners` | read | List practitioners |
| `akutehealth_get_practitioner` | read | Get practitioner |
| `akutehealth_usage_status` | meta | Usage status (free-tier meter) |
| `akutehealth_request_feature` | meta | Request a missing feature |
| `akutehealth_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `akutehealth_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `akutehealth_upgrade` (it returns a Stripe Checkout link). Cancel any time with `akutehealth_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `akutehealth_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Akute Health.
