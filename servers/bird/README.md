# Bird MCP by usefulapi

Read your Bird SMS, WhatsApp, email, contacts and audiences from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Bird API key.

**Live endpoint:** `https://bird.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bird

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bird.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bird https://bird.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bird&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbird.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bird": {
      "url": "https://bird.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bird credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bird/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Bird API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bird_list_contacts` | read | List contacts |
| `bird_get_contact` | read | Get a contact |
| `bird_list_contact_properties` | read | List contact properties |
| `bird_list_audiences` | read | List audiences |
| `bird_get_audience` | read | Get an audience |
| `bird_list_audience_contacts` | read | List an audience's contacts |
| `bird_list_sms_messages` | read | List SMS messages |
| `bird_get_sms_message` | read | Get an SMS message |
| `bird_list_sms_templates` | read | List SMS templates |
| `bird_list_whatsapp_messages` | read | List WhatsApp messages |
| `bird_get_whatsapp_message` | read | Get a WhatsApp message |
| `bird_list_whatsapp_templates` | read | List WhatsApp templates |
| `bird_list_email_messages` | read | List email messages |
| `bird_get_email_message` | read | Get an email message |
| `bird_create_contact` | **write** | Create a contact |
| `bird_create_audience` | **write** | Create an audience |
| `bird_usage_status` | meta | Usage status (free-tier meter) |
| `bird_request_feature` | meta | Request a missing feature |
| `bird_upgrade` | meta | Upgrade to Pro (unlimited) |
| `bird_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `bird_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bird_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bird_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
