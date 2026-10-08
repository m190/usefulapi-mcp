# Codecov MCP by usefulapi

Read Codecov coverage reports, commits, pulls, flags and components. Hosted, no local install.

**Live endpoint:** `https://codecov.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://codecov.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http codecov https://codecov.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=codecov&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcodecov.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "codecov": {
      "url": "https://codecov.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/codecov/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Codecov credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `codecov_list_service_owners` | read | List service owners |
| `codecov_get_owner` | read | Get owner |
| `codecov_list_users` | read | List users |
| `codecov_list_repos` | read | List repositories |
| `codecov_get_repo` | read | Get repository |
| `codecov_get_repo_config` | read | Get repository config |
| `codecov_list_branches` | read | List branches |
| `codecov_get_branch` | read | Get branch |
| `codecov_list_commits` | read | List commits |
| `codecov_get_commit` | read | Get commit |
| `codecov_list_commit_uploads` | read | List commit uploads |
| `codecov_list_pulls` | read | List pull requests |
| `codecov_get_pull` | read | Get pull request |
| `codecov_get_coverage_totals` | read | Get coverage totals |
| `codecov_get_coverage_report` | read | Get coverage report |
| `codecov_get_report_tree` | read | Get report tree |
| `codecov_get_file_coverage` | read | Get file coverage |
| `codecov_get_coverage_trend` | read | Get coverage trend |
| `codecov_list_flags` | read | List flags |
| `codecov_get_flag_coverage_trend` | read | Get flag coverage trend |
| `codecov_list_components` | read | List components |
| `codecov_compare` | read | Compare coverage |
| `codecov_compare_impacted_files` | read | Compare impacted files |
| `codecov_list_test_results` | read | List test results |
| `codecov_usage_status` | meta | Usage status (free-tier meter) |
| `codecov_upgrade` | meta | Upgrade to Pro (unlimited) |
| `codecov_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `codecov_upgrade` (it returns a Stripe Checkout link). Cancel any time with `codecov_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `codecov_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
