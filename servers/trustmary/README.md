# Trustmary MCP by usefulapi

Use your [Trustmary](https://trustmary.com) account from Claude, Cursor, or any MCP client. Read surveys, responses, contacts, webhooks and review sources, and create or update contacts, import survey answers and create webhooks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://trustmary.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://trustmary.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http trustmary https://trustmary.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=trustmary&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftrustmary.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "trustmary": {
      "url": "https://trustmary.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Trustmary credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/trustmary/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Trustmary API key** from your Trustmary account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `trustmary_test_api_key` | read | Test the API key |
| `trustmary_list_contacts` | read | List contacts |
| `trustmary_list_contact_lists` | read | List contact lists |
| `trustmary_upsert_contact` | **write** | Create or update a contact |
| `trustmary_list_surveys` | read | List surveys |
| `trustmary_get_survey` | read | Get a survey |
| `trustmary_list_survey_responses` | read | List survey responses |
| `trustmary_get_survey_import_fields` | read | Get survey import fields |
| `trustmary_import_survey_answers` | **write** | Import survey answers |
| `trustmary_list_import_sources` | read | List import sources |
| `trustmary_get_import_source` | read | Get an import source |
| `trustmary_list_embeds` | read | List embeds |
| `trustmary_list_widgets` | read | List widgets |
| `trustmary_list_experiments` | read | List experiments |
| `trustmary_list_webhooks` | read | List webhooks |
| `trustmary_get_webhook_example` | read | Get a webhook example payload |
| `trustmary_create_webhook` | **write** | Create a webhook |
| `trustmary_list_review_connections` | read | List review connections |
| `trustmary_get_review_connection` | read | Get a review connection |
| `trustmary_create_review_connection` | **write** | Create a review connection |
| `trustmary_update_review_connection` | **write** | Update a review connection |
| `trustmary_list_custom_fields` | read | List custom fields |
| `trustmary_get_custom_field` | read | Get a custom field |
| `trustmary_usage_status` | meta | Usage status (free-tier meter) |
| `trustmary_request_feature` | meta | Request a missing feature |
| `trustmary_upgrade` | meta | Upgrade to Pro or Pro+ |
| `trustmary_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `trustmary_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `trustmary_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `trustmary_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
