# Wild Apricot MCP by usefulapi

Use [Wild Apricot](https://www.wildapricot.com) from Claude, Cursor, or any MCP client — look up contacts, members, membership levels, events, registrations, invoices, payments and donations, and add contacts or check in attendees.
Hosted, no local install: connect with your own Wild Apricot credentials.

**Live endpoint:** `https://wild-apricot.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/wild-apricot

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wild-apricot.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wild-apricot https://wild-apricot.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wild-apricot&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwild-apricot.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wild-apricot": {
      "url": "https://wild-apricot.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Wild Apricot credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wild-apricot/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Wild Apricot API key** (Settings → Integration → Authorized applications), plus an optional account ID.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wildapricot_list_accounts` | read | List accounts |
| `wildapricot_get_account` | read | Get the account |
| `wildapricot_list_contacts` | read | Search contacts and members |
| `wildapricot_get_contact` | read | Get one contact |
| `wildapricot_list_contact_fields` | read | List contact fields |
| `wildapricot_list_membership_levels` | read | List membership levels |
| `wildapricot_list_member_groups` | read | List member groups |
| `wildapricot_list_saved_searches` | read | List saved searches |
| `wildapricot_get_saved_search` | read | Run a saved search |
| `wildapricot_list_events` | read | List events |
| `wildapricot_get_event` | read | Get one event |
| `wildapricot_list_event_registration_types` | read | List event registration types |
| `wildapricot_list_event_registrations` | read | List event registrations |
| `wildapricot_list_invoices` | read | List invoices |
| `wildapricot_list_payments` | read | List payments |
| `wildapricot_list_donations` | read | List donations |
| `wildapricot_list_audit_log` | read | List audit log items |
| `wildapricot_create_contact` | **write** | Create a contact or member |
| `wildapricot_update_contact` | **write** | Update a contact or member |
| `wildapricot_create_event_registration` | **write** | Register a contact for an event |
| `wildapricot_check_in_attendee` | **write** | Check an attendee in or out |
| `wildapricot_usage_status` | meta | Usage status (free-tier meter) |
| `wildapricot_request_feature` | meta | Request a missing feature |
| `wildapricot_upgrade` | meta | Upgrade to Pro (unlimited) |
| `wildapricot_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `wildapricot_upgrade` (it returns a Stripe Checkout link). Cancel any time with `wildapricot_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `wildapricot_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Wild Apricot.
