# Glue Up MCP by usefulapi

Read Glue Up events, memberships, contacts, organizations and finance records.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://glue-up.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http glue-up https://glue-up.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=glue-up&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fglue-up.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "glue-up": {
      "url": "https://glue-up.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Glue Up credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/glue-up/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `glueup_list_events` | read | List events |
| `glueup_list_membership_types` | read | List membership types |
| `glueup_list_members` | read | List directory members |
| `glueup_get_member` | read | Get a directory member |
| `glueup_list_company_memberships` | read | List company memberships |
| `glueup_get_company_membership` | read | Get a company membership |
| `glueup_list_individual_memberships` | read | List individual memberships |
| `glueup_get_individual_membership` | read | Get an individual membership |
| `glueup_list_industry_codes` | read | List industry codes |
| `glueup_get_directory_settings` | read | Get membership directory settings |
| `glueup_get_application_forms` | read | Get membership application forms |
| `glueup_list_application_form_fields` | read | List application form fields |
| `glueup_list_invoices` | read | List invoices |
| `glueup_usage_status` | meta | Usage status (free-tier meter) |
| `glueup_request_feature` | meta | Request a missing feature |
| `glueup_upgrade` | meta | Upgrade to Pro or Pro+ |
| `glueup_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API public key and region) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per API public key and region) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `glueup_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `glueup_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `glueup_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
