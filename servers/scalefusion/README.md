# Scalefusion MCP by usefulapi

Use your [Scalefusion](https://scalefusion.com) account from Claude, Cursor, or any MCP client. Read managed devices and groups, and lock, unlock, reboot or move devices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://scalefusion.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://scalefusion.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http scalefusion https://scalefusion.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=scalefusion&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fscalefusion.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "scalefusion": {
      "url": "https://scalefusion.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Scalefusion credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/scalefusion/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Scalefusion instance region** (Global, India, USA or MEA) and your **Developer API key** (Integrations → Developer API; the account needs the Developer API permission). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `scalefusion_list_devices` | read | List managed devices |
| `scalefusion_get_device` | read | Get device details |
| `scalefusion_search_devices` | read | Search devices by IMEI or serial number |
| `scalefusion_get_device_battery` | read | Get device battery |
| `scalefusion_get_device_locations` | read | Get last device locations |
| `scalefusion_get_device_monthly_data_usage` | read | Get monthly data usage |
| `scalefusion_list_device_profiles` | read | List device profiles |
| `scalefusion_list_device_groups` | read | List device groups |
| `scalefusion_lock_devices` | **write** | Lock devices |
| `scalefusion_unlock_devices` | **write** | Unlock devices |
| `scalefusion_reboot_device` | **write** | Reboot a device |
| `scalefusion_change_device_group` | **write** | Move a device to another group |
| `scalefusion_update_exit_passcode` | **write** | Set a device exit passcode |
| `scalefusion_clear_app_data` | **write** | Clear app data on devices |
| `scalefusion_usage_status` | meta | Usage status (free-tier meter) |
| `scalefusion_request_feature` | meta | Request a missing feature |
| `scalefusion_upgrade` | meta | Upgrade to Pro or Pro+ |
| `scalefusion_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `scalefusion_upgrade` (it returns a Stripe Checkout link). Cancel any time with `scalefusion_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `scalefusion_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
