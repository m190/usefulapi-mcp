# Balena MCP by usefulapi

Use your [Balena](https://www.balena.io) account from Claude, Cursor, or any MCP client. Read applications, devices, device health and releases, and rename devices or set device notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://balena.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://balena.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http balena https://balena.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=balena&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbalena.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "balena": {
      "url": "https://balena.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Balena credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/balena/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Balena named API key** (create it in your balenaCloud account settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `balena_get_current_user` | read | Get the account of the API key |
| `balena_list_applications` | read | List applications |
| `balena_get_application` | read | Get an application |
| `balena_list_devices` | read | List devices |
| `balena_get_device` | read | Get a device |
| `balena_get_device_health` | read | Get device health |
| `balena_list_releases` | read | List releases |
| `balena_get_release` | read | Get a release |
| `balena_rename_device` | **write** | Rename a device |
| `balena_add_device_note` | **write** | Set a device note |
| `balena_usage_status` | meta | Usage status (free-tier meter) |
| `balena_request_feature` | meta | Request a missing feature |
| `balena_upgrade` | meta | Upgrade to Pro or Pro+ |
| `balena_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `balena_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `balena_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `balena_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
