# Propstack MCP by usefulapi

Use [Propstack](https://www.propstack.de) from Claude, Cursor, or any MCP client — contacts, properties, projects, deals and pipelines, activities, tasks, events and users, plus creating and updating contacts, tasks (notes, to-dos, appointments) and deals. Contact output is limited to business fields.
Hosted, no local install: connect with your own Propstack credentials.

**Live endpoint:** `https://propstack.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/propstack

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://propstack.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http propstack https://propstack.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=propstack&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpropstack.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "propstack": {
      "url": "https://propstack.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Propstack credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/propstack/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `propstack_list_contacts` | read | List or search contacts |
| `propstack_get_contact` | read | Get contact |
| `propstack_list_properties` | read | List or search properties |
| `propstack_get_property` | read | Get property |
| `propstack_list_projects` | read | List projects |
| `propstack_list_deals` | read | List deals |
| `propstack_list_deal_pipelines` | read | List deal pipelines |
| `propstack_list_activities` | read | List activities |
| `propstack_get_task` | read | Get task |
| `propstack_list_events` | read | List calendar events |
| `propstack_list_users` | read | List users |
| `propstack_get_reference_data` | read | Get reference data |
| `propstack_create_contact` | **write** | Create contact |
| `propstack_update_contact` | **write** | Update contact |
| `propstack_create_task` | **write** | Create note, to-do or appointment |
| `propstack_update_task` | **write** | Update task |
| `propstack_create_deal` | **write** | Create deal |
| `propstack_update_deal` | **write** | Update deal |
| `propstack_usage_status` | meta | Usage status (free-tier meter) |
| `propstack_request_feature` | meta | Request a missing feature |
| `propstack_upgrade` | meta | Upgrade to Pro (unlimited) |
| `propstack_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `propstack_upgrade` (it returns a Stripe Checkout link). Cancel any time with `propstack_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `propstack_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Propstack.
