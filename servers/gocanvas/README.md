# GoCanvas MCP by usefulapi

Read GoCanvas forms, submissions, users, dispatches and reference data; create dispatches.

**Live endpoint:** `https://gocanvas.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/gocanvas

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gocanvas.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gocanvas https://gocanvas.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gocanvas&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgocanvas.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gocanvas": {
      "url": "https://gocanvas.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GoCanvas credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gocanvas/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste the **client ID** and **client secret** of a GoCanvas OAuth application (create one as an administrator in your GoCanvas profile → API Settings; the secret is shown only once). The account needs API v3 access (Pro/Max plan or the API add-on).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gocanvas_get_me` | read | Get the connected GoCanvas user |
| `gocanvas_list_forms` | read | List GoCanvas forms |
| `gocanvas_get_form` | read | Get a GoCanvas form definition |
| `gocanvas_list_form_reports` | read | List report definitions of a GoCanvas form |
| `gocanvas_list_submissions` | read | List GoCanvas submissions |
| `gocanvas_get_submission` | read | Get a GoCanvas submission |
| `gocanvas_list_submission_revisions` | read | List revisions of a GoCanvas submission |
| `gocanvas_list_users` | read | List GoCanvas users |
| `gocanvas_get_user` | read | Get a GoCanvas user |
| `gocanvas_list_departments` | read | List GoCanvas departments |
| `gocanvas_list_department_users` | read | List users of a GoCanvas department |
| `gocanvas_list_dispatches` | read | List GoCanvas dispatches |
| `gocanvas_get_dispatch` | read | Get a GoCanvas dispatch |
| `gocanvas_list_customers` | read | List GoCanvas customers |
| `gocanvas_list_projects` | read | List GoCanvas projects |
| `gocanvas_list_sites` | read | List GoCanvas sites |
| `gocanvas_list_reference_data` | read | List GoCanvas reference data sets |
| `gocanvas_get_reference_data` | read | Get a GoCanvas reference data set |
| `gocanvas_list_groups` | read | List GoCanvas groups |
| `gocanvas_list_workflows` | read | List GoCanvas workflows |
| `gocanvas_list_locations` | read | List GoCanvas tracker locations |
| `gocanvas_create_dispatch` | **write** | Create a GoCanvas dispatch |
| `gocanvas_mark_dispatch_received` | **write** | Mark a GoCanvas dispatch as received |
| `gocanvas_usage_status` | meta | Usage status (free-tier meter) |
| `gocanvas_request_feature` | meta | Request a missing feature |
| `gocanvas_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `gocanvas_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `gocanvas_upgrade` (it returns a Stripe Checkout link). Cancel any time with `gocanvas_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `gocanvas_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
