# Addressfinder MCP by usefulapi

Use your [Addressfinder](https://addressfinder.com) account from Claude, Cursor, or any MCP client. Look up, verify and geocode New Zealand and Australian addresses, and search their streets and suburbs. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://addressfinder.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://addressfinder.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http addressfinder https://addressfinder.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=addressfinder&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faddressfinder.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "addressfinder": {
      "url": "https://addressfinder.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Addressfinder credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/addressfinder/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Addressfinder API key** and **API secret** (Addressfinder Portal, under **credentials**; the plan must include direct API access). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `addressfinder_nz_address_autocomplete` | read | NZ address autocomplete |
| `addressfinder_nz_address_metadata` | read | NZ address metadata |
| `addressfinder_nz_address_verify` | read | Verify NZ address |
| `addressfinder_nz_reverse_geocode` | read | NZ reverse geocode |
| `addressfinder_nz_location_autocomplete` | read | NZ location autocomplete |
| `addressfinder_nz_location_metadata` | read | NZ location metadata |
| `addressfinder_au_address_autocomplete` | read | AU address autocomplete |
| `addressfinder_au_address_metadata` | read | AU address metadata |
| `addressfinder_au_address_verify` | read | Verify AU address |
| `addressfinder_au_location_autocomplete` | read | AU location autocomplete |
| `addressfinder_au_location_metadata` | read | AU location metadata |
| `addressfinder_usage_status` | meta | Usage status (free-tier meter) |
| `addressfinder_request_feature` | meta | Request a missing feature |
| `addressfinder_upgrade` | meta | Upgrade to Pro or Pro+ |
| `addressfinder_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `addressfinder_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `addressfinder_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `addressfinder_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
