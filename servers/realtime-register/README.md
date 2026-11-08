# Realtime Register MCP by usefulapi

Use your [Realtime Register](https://www.realtimeregister.com) account from Claude, Cursor, or any MCP client. Check domain availability, read domains and DNS zones, and update DNS zone records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://realtime-register.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://realtime-register.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http realtime-register https://realtime-register.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=realtime-register&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frealtime-register.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "realtime-register": {
      "url": "https://realtime-register.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Realtime Register credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/realtime-register/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Realtime Register API key** (created on your profile page; it is shown only once) and your **customer handle** (the account name in the API paths). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `realtimeregister_check_domain` | read | Check a domain |
| `realtimeregister_list_domains` | read | List domains |
| `realtimeregister_get_domain` | read | Get a domain |
| `realtimeregister_get_domain_zone` | read | Get a domain's DNS zone |
| `realtimeregister_list_dns_zones` | read | List DNS zones |
| `realtimeregister_get_dns_zone` | read | Get a DNS zone |
| `realtimeregister_list_contacts` | read | List contacts |
| `realtimeregister_get_contact` | read | Get a contact |
| `realtimeregister_list_hosts` | read | List hosts |
| `realtimeregister_get_host` | read | Get a host |
| `realtimeregister_get_credit` | read | Get the account credit |
| `realtimeregister_get_process` | read | Get a process |
| `realtimeregister_get_tld_info` | read | Get TLD information |
| `realtimeregister_update_dns_zone` | **write** | Update a DNS zone |
| `realtimeregister_usage_status` | meta | Usage status (free-tier meter) |
| `realtimeregister_request_feature` | meta | Request a missing feature |
| `realtimeregister_upgrade` | meta | Upgrade to Pro or Pro+ |
| `realtimeregister_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `realtimeregister_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `realtimeregister_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `realtimeregister_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
