# Particle MCP by usefulapi

Use your [Particle](https://particle.io) account from Claude, Cursor, or any MCP client. Read devices and their variables, call device functions, and rename devices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://particle.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://particle.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http particle https://particle.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=particle&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fparticle.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "particle": {
      "url": "https://particle.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Particle credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/particle/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Particle access token** (run `particle token create` in the Particle CLI, or create an API user token in the Particle console). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `particle_get_user` | read | Get account |
| `particle_get_access_token` | read | Get access token info |
| `particle_list_devices` | read | List devices |
| `particle_list_product_devices` | read | List product devices |
| `particle_get_device` | read | Get device |
| `particle_get_device_variable` | read | Get device variable |
| `particle_get_product` | read | Get product |
| `particle_call_function` | **write** | Call device function |
| `particle_rename_device` | **write** | Rename device |
| `particle_usage_status` | meta | Usage status (free-tier meter) |
| `particle_request_feature` | meta | Request a missing feature |
| `particle_upgrade` | meta | Upgrade to Pro or Pro+ |
| `particle_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `particle_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `particle_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `particle_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
