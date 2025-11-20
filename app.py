{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "toc_visible": true,
      "authorship_tag": "ABX9TyMdykO8pa8F6ftlXXQ29Xia",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/bahattinyaylagul-sketch/c-level-agency-futuristik-website/blob/main/app.py\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "qdKcf9HuXhFd"
      },
      "outputs": [],
      "source": []
    },
    {
      "cell_type": "code",
      "metadata": {
        "id": "96f59749"
      },
      "source": [
        "%%writefile app.py\n",
        "import streamlit as st\n",
        "import pandas as pd\n",
        "import plotly.express as px\n",
        "import numpy as np\n",
        "import statsmodels.api as sm\n",
        "\n",
        "st.set_page_config(page_title=\"C-Level SEO Forecast\", layout=\"wide\")\n",
        "\n",
        "st.markdown(\"\"\"\n",
        "<style>\n",
        "[data-testid=\"stSidebar\"] {display: none;}\n",
        ".block-container {padding: 2rem 4rem;}\n",
        "h1, h2, h3 {font-family: 'Inter', sans-serif !important; font-weight: 600 !important; color:#111;}\n",
        ".card {background:#fff; padding:1.5rem; border-radius:12px; border:1px solid #ddd;}\n",
        ".kpi {background:#f9fafb; padding:1.2rem; border-radius:10px; border:1px solid #eee;}\n",
        "</style>\n",
        "\"\"\", unsafe_allow_html=True)\n",
        "\n",
        "st.markdown(\"\"\"\n",
        "<div class=\"card\">\n",
        "    <h1 style=\"margin-bottom:4px;\">C-Level SEO Forecast Tool</h1>\n",
        "    <p style=\"color:#666; margin-top:0px;\">Temiz ve profesyonel SEO tahmin aracı.</p>\n",
        "</div>\n",
        "\"\"\", unsafe_allow_html=True)\n",
        "\n",
        "st.subheader(\"1) Google Search Console CSV Yükle\")\n",
        "uploaded = st.file_uploader(\"CSV dosyasını seçin\", type=[\"csv\"])\n",
        "\n",
        "if uploaded:\n",
        "    df = pd.read_csv(uploaded)\n",
        "    st.subheader(\"Veri Önizleme\")\n",
        "    st.dataframe(df.head())\n"
      ],
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "c765beaa",
        "outputId": "ebaa582b-6286-48b7-f577-f492f5f69cb2"
      },
      "source": [
        "%%writefile requirements.txt\n",
        "streamlit\n",
        "pandas\n",
        "plotly\n",
        "numpy\n",
        "statsmodels"
      ],
      "execution_count": 1,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "Writing requirements.txt\n"
          ]
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "from google.colab import drive\n",
        "drive.mount('/content/drive')"
      ],
      "metadata": {
        "id": "FKODCTbGZHj-"
      },
      "execution_count": null,
      "outputs": []
    }
  ]
}