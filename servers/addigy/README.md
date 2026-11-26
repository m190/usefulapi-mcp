# Addigy MCP by usefulapi

Use your [Addigy](https://addigy.com) account from Claude, Cursor, or any MCP client. Read devices, policies, alerts, compliance results and system events from your Addigy organization, and change policy assignments or alerts when you ask. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://addigy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://addigy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http addigy https://addigy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=addigy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faddigy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "addigy": {
      "url": "https://addigy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Addigy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/addigy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Addigy API v2 key** (Account → Integrations → API & Webhooks, V2 tab, New API Token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `addigy_whoami` | read | Show the API key's organization |
| `addigy_get_permissions` | read | List the API key's permissions |
| `addigy_list_available_facts` | read | List device facts |
| `addigy_search_devices` | read | Search devices |
| `addigy_get_device_policies` | read | List a device's policies |
| `addigy_get_device_tickets` | read | List a device's tickets |
| `addigy_get_device_compliance` | read | Check devices against compliance |
| `addigy_list_policies` | read | List policies |
| `addigy_list_alerts` | read | List received alerts |
| `addigy_list_system_events` | read | List system events |
| `addigy_list_scripts` | read | List saved scripts |
| `addigy_list_benchmarks` | read | List compliance benchmarks |
| `addigy_list_org_users` | read | List organization users |
| `addigy_get_ticket_notes` | read | List notes on a ticket |
| `addigy_assign_devices_to_policies` | **write** | Assign devices to policies |
| `addigy_unassign_devices_from_policies` | **write** | Remove devices from policies |
| `addigy_update_alerts` | **write** | Acknowledge, mute or resolve alerts |
| `addigy_add_ticket_note` | **write** | Add a note to a ticket |
| `addigy_usage_status` | meta | Usage status (free-tier meter) |
| `addigy_request_feature` | meta | Request a missing feature |
| `addigy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `addigy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `addigy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `addigy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `addigy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
