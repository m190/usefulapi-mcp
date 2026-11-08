# Hexnode MCP by usefulapi

Use your Hexnode account from Claude, Cursor, or any MCP client. Read devices, users and policies, and scan, lock, restart devices or install apps on them. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hexnode.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hexnode.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hexnode https://hexnode.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hexnode&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhexnode.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hexnode": {
      "url": "https://hexnode.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hexnode credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hexnode/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **portal name** (the part before .hexnodemdm.com) and your **Hexnode API key** (Admin → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hexnode_list_devices` | read | List devices |
| `hexnode_get_device` | read | Get a device |
| `hexnode_list_device_policies` | read | List a device's policies |
| `hexnode_list_device_apps` | read | List a device's apps |
| `hexnode_list_device_locations` | read | List a device's locations |
| `hexnode_get_action_status` | read | Get action status for a device |
| `hexnode_list_users` | read | List users |
| `hexnode_get_user` | read | Get a user |
| `hexnode_list_device_groups` | read | List device groups |
| `hexnode_get_device_group` | read | Get a device group |
| `hexnode_list_policies` | read | List policies |
| `hexnode_get_policy` | read | Get a policy |
| `hexnode_list_apps` | read | List apps |
| `hexnode_get_app` | read | Get an app |
| `hexnode_list_app_groups` | read | List app groups |
| `hexnode_scan_device` | **write** | Scan devices |
| `hexnode_install_application` | **write** | Install an app on devices |
| `hexnode_restart_device` | **write** | Restart devices |
| `hexnode_lock_device` | **write** | Lock devices |
| `hexnode_usage_status` | meta | Usage status (free-tier meter) |
| `hexnode_request_feature` | meta | Request a missing feature |
| `hexnode_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hexnode_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hexnode_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hexnode_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hexnode_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
