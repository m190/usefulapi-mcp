# Elation Health MCP by usefulapi

Use [Elation Health](https://www.elationhealth.com) from Claude, Cursor, or any MCP client — read-only access to patients, appointments, practices, physicians, problems, allergies, medications, visit notes and vitals.
Hosted, no local install: connect with your own Elation Health credentials.

**Patient data:** do not use this server with protected health information (PHI). We do not sign HIPAA Business Associate Agreements (BAAs). See https://usefulapi.io/terms/#5-acceptable-use.

**Live endpoint:** `https://elation-health.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/elation-health

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://elation-health.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http elation-health https://elation-health.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=elation-health&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Felation-health.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "elation-health": {
      "url": "https://elation-health.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Elation Health credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/elation-health/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `elationhealth_list_patients` | read | List patients |
| `elationhealth_get_patient` | read | Get a patient |
| `elationhealth_list_appointments` | read | List appointments |
| `elationhealth_get_appointment` | read | Get an appointment |
| `elationhealth_list_appointment_types` | read | List appointment types |
| `elationhealth_list_practices` | read | List practices |
| `elationhealth_list_physicians` | read | List physicians |
| `elationhealth_list_problems` | read | List a patient's problems |
| `elationhealth_list_allergies` | read | List a patient's allergies |
| `elationhealth_list_medications` | read | List a patient's medications |
| `elationhealth_list_visit_notes` | read | List a patient's visit notes |
| `elationhealth_get_visit_note` | read | Get a visit note |
| `elationhealth_list_non_visit_notes` | read | List a patient's non-visit notes |
| `elationhealth_list_vitals` | read | List a patient's vitals |
| `elationhealth_usage_status` | meta | Usage status (free-tier meter) |
| `elationhealth_request_feature` | meta | Request a missing feature |
| `elationhealth_upgrade` | meta | Upgrade to Pro (unlimited) |
| `elationhealth_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per practice) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `elationhealth_upgrade` (it returns a Stripe Checkout link). Cancel any time with `elationhealth_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `elationhealth_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Elation Health.
