# Medplum MCP by usefulapi

Use your [Medplum](https://www.medplum.com) account from Claude, Cursor, or any MCP client. Search and read patients, encounters, observations, conditions, allergies, medication requests and appointments, all read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://medplum.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://medplum.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http medplum https://medplum.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=medplum&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmedplum.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "medplum": {
      "url": "https://medplum.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Medplum credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/medplum/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **ClientApplication ID** and **ClientApplication secret** from your Medplum project (Project Admin page). Access follows the AccessPolicy attached to it. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `medplum_search_patients` | read | Search patients |
| `medplum_get_patient` | read | Get a patient |
| `medplum_search_encounters` | read | Search encounters |
| `medplum_search_observations` | read | Search observations |
| `medplum_search_conditions` | read | Search conditions |
| `medplum_search_allergies` | read | Search allergies |
| `medplum_search_medication_requests` | read | Search medication requests |
| `medplum_search_appointments` | read | Search appointments |
| `medplum_search_practitioners` | read | Search practitioners |
| `medplum_get_resource` | read | Get a resource |
| `medplum_usage_status` | meta | Usage status (free-tier meter) |
| `medplum_request_feature` | meta | Request a missing feature |
| `medplum_upgrade` | meta | Upgrade to Pro or Pro+ |
| `medplum_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `medplum_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `medplum_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `medplum_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
