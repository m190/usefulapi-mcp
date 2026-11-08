# Axcient MCP by usefulapi

Use your [Axcient](https://axcient.com) account from Claude, Cursor, or any MCP client. Read the clients, devices, vaults, restore points, jobs and users of your x360Recover partner organization, without changing any data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://axcient.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://axcient.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http axcient https://axcient.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=axcient&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faxcient.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "axcient": {
      "url": "https://axcient.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Axcient credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/axcient/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Axcient x360Recover API key** (a partner admin creates it in **partner.axcient.com → Settings → API Keys**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `axcient_get_organization` | read | Get organization |
| `axcient_list_clients` | read | List clients |
| `axcient_get_client` | read | Get client |
| `axcient_get_client_usage` | read | Get client storage usage |
| `axcient_list_appliances` | read | List appliances |
| `axcient_get_appliance` | read | Get appliance |
| `axcient_list_vaults` | read | List vaults |
| `axcient_get_vault` | read | Get vault |
| `axcient_get_vault_connectivity_threshold` | read | Get vault connectivity threshold |
| `axcient_list_devices` | read | List devices |
| `axcient_get_device` | read | Get device |
| `axcient_get_device_autoverify` | read | Get device AutoVerify results |
| `axcient_list_device_restore_points` | read | List device restore points |
| `axcient_list_device_jobs` | read | List device jobs |
| `axcient_get_job` | read | Get job |
| `axcient_get_job_history` | read | Get job history |
| `axcient_list_users` | read | List users |
| `axcient_get_user` | read | Get user |
| `axcient_usage_status` | meta | Usage status (free-tier meter) |
| `axcient_request_feature` | meta | Request a missing feature |
| `axcient_upgrade` | meta | Upgrade to Pro or Pro+ |
| `axcient_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `axcient_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `axcient_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `axcient_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
