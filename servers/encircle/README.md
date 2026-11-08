# Encircle MCP by usefulapi

Use your [Encircle](https://www.encircleapp.com) account from Claude, Cursor, or any MCP client. Read property claims, structures, rooms, photos, moisture and dehumidifier readings, and add claim notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://encircle.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://encircle.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http encircle https://encircle.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=encircle&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fencircle.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "encircle": {
      "url": "https://encircle.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Encircle credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/encircle/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Encircle API bearer token** (created in your Encircle account's API settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `encircle_list_organizations` | read | List organizations |
| `encircle_list_property_claims` | read | List property claims |
| `encircle_get_property_claim` | read | Get a property claim |
| `encircle_list_structures` | read | List structures |
| `encircle_list_rooms` | read | List rooms |
| `encircle_list_media` | read | List claim media |
| `encircle_list_material_readings` | read | List moisture readings |
| `encircle_list_dehumidifier_readings` | read | List dehumidifier readings |
| `encircle_list_claim_notes` | read | List claim notes |
| `encircle_create_claim_note` | **write** | Create a claim note |
| `encircle_usage_status` | meta | Usage status (free-tier meter) |
| `encircle_request_feature` | meta | Request a missing feature |
| `encircle_upgrade` | meta | Upgrade to Pro or Pro+ |
| `encircle_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `encircle_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `encircle_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `encircle_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
