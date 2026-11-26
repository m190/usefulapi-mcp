# PostHog MCP by usefulapi

Use your [PostHog](https://posthog.com) account from Claude, Cursor, or any MCP client. Read insights, dashboards, events, persons, feature flags and error issues, with no write tools. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://posthog.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://posthog.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http posthog https://posthog.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=posthog&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fposthog.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "posthog": {
      "url": "https://posthog.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PostHog credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/posthog/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **personal API key** with read scopes (Settings → Personal API keys in PostHog), a **region** (US or EU Cloud) and your **project ID** (Project settings → Project ID).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `posthog_list_organizations` | read | List organizations |
| `posthog_list_projects` | read | List projects |
| `posthog_list_insights` | read | List insights |
| `posthog_get_insight` | read | Get an insight |
| `posthog_list_dashboards` | read | List dashboards |
| `posthog_get_dashboard` | read | Get a dashboard |
| `posthog_list_events` | read | List events |
| `posthog_list_event_definitions` | read | List event names |
| `posthog_list_persons` | read | List persons |
| `posthog_get_person` | read | Get a person |
| `posthog_list_actions` | read | List actions |
| `posthog_list_cohorts` | read | List cohorts |
| `posthog_list_feature_flags` | read | List feature flags |
| `posthog_get_feature_flag` | read | Get a feature flag |
| `posthog_list_experiments` | read | List experiments |
| `posthog_list_surveys` | read | List surveys |
| `posthog_list_error_tracking_issues` | read | List error issues |
| `posthog_list_session_recordings` | read | List session recordings |
| `posthog_list_annotations` | read | List annotations |
| `posthog_usage_status` | meta | Usage status (free-tier meter) |
| `posthog_request_feature` | meta | Request a missing feature |
| `posthog_upgrade` | meta | Upgrade to Pro or Pro+ |
| `posthog_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `posthog_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `posthog_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `posthog_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
