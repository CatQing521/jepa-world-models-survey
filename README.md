# From Joint-Embedding Prediction to World Models: A Survey

**Project page:** [catqing521.github.io/jepa-world-models-survey](https://catqing521.github.io/jepa-world-models-survey/) · **Manuscript:** [PDF](https://catqing521.github.io/jepa-world-models-survey/paper/survey.pdf) · **Method collection:** [browse and search](https://catqing521.github.io/jepa-world-models-survey/dist/#collection)

Ziying Song, Qing Wang, Peiliang Wu, Hao Yang, Yanchen Huo, Lei Yang, Li Wang, Yadan Luo, and Zheng Zhu.

This repository accompanies a survey of Joint-Embedding Predictive Architectures (JEPAs) and their development toward world modeling. The manuscript is in preparation. The PDF is a current manuscript copy, not evidence of journal acceptance.

JEPAs learn by predicting target representations from context instead of reconstructing complete observations. This survey asks what changes as that prediction is extended from static images to video, actions, multiple modalities, and structured scenes—and what the reported experiments actually establish about world-model capabilities.

## Contents

- [Survey overview](#survey-overview)
- [Five JEPA families](#five-jepa-families)
- [Capability evidence](#capability-evidence)
- [Datasets and evaluation](#datasets-and-evaluation)
- [Applications](#applications)
- [Challenges](#challenges)
- [Method collection](#method-collection)
- [Citation and authors](#citation-and-authors)

## Survey overview

The survey uses two complementary views. Its **taxonomy** groups methods by their main prediction task. Its **R/P/I/C analysis** asks which abilities have been tested: useful representation, future prediction, action-sensitive prediction, and control. A method's family does not by itself establish its capability level. Some systems span more than one family; the manuscript places them according to their main contribution.

The manuscript covers JEPA foundations, technical evolution, representative performance results, applications, and open research problems. The [project page](https://catqing521.github.io/jepa-world-models-survey/) presents these parts in a browsable form; the [PDF](https://catqing521.github.io/jepa-world-models-survey/paper/survey.pdf) contains the detailed analysis, citations, and performance tables.

## Five JEPA families

| Family | Main prediction task | Topics in the survey | Representative methods |
| --- | --- | --- | --- |
| **JEPA-F** · Foundational / static | Predict a missing representation using context from a static observation | Masked regions; local semantic targets; representation constraints | I-JEPA, DMT-JEPA, SparseJEPA |
| **JEPA-T** · Temporal | Predict representations across time or future states | Masked spatiotemporal prediction; future-oriented latent prediction | V-JEPA, V-JEPA 2, MC-JEPA |
| **JEPA-A** · Action-conditioned | Predict latent changes with actions as inputs | Action learning; latent rollouts for planning | V-JEPA 2-AC, LeWM, Fast-LeWM |
| **JEPA-M** · Multimodal | Predict or align targets across modalities | Cross-modal prediction; multimodal fusion | VL-JEPA, M3-JEPA, AV-JEPA |
| **JEPA-SC** · Structured / scene-centric | Predict point, object, geometry, or relation representations | Point clouds and 4D geometry; objects and relations | Point-JEPA, 3D-JEPA, Causal-JEPA |

These are organizing categories, not a ranking of methods or a claim that every method is a complete world model.

## Capability evidence

The manuscript evaluates representative systems using four questions:

| Level | Question asked of the reported experiments |
| --- | --- |
| **R** · Representation | Are the learned features useful on downstream tasks? |
| **P** · Prediction | Does the model predict future states that were not part of its input? |
| **I** · Intervention | Do predictions change appropriately when the action changes? |
| **C** · Control | Does a system use prediction to help choose and revise actions? |

The capability table also distinguishes **C<sub>sys</sub>**, closed-loop performance of the complete system, from **C<sub>attr</sub>**, evidence that a predictive component contributes to that performance. Its entries mean **D**: directly tested; **Q**: related evidence, but incomplete for the stated claim; **—**: sufficient evidence is not reported. The last symbol does not imply that the method lacks the ability. See Table 2 and its discussion in the [manuscript](https://catqing521.github.io/jepa-world-models-survey/paper/survey.pdf) for method-level judgments.

## Datasets and evaluation

Tables 4–8 of the manuscript summarize results reported in the original studies. Table 3 maps each family to its benchmark tasks and metrics:

| Performance table | Tasks and benchmarks | Main metrics |
| --- | --- | --- |
| **Table 4 · JEPA-F** | ImageNet-1K classification; ADE20K semantic segmentation; COCO detection and instance segmentation; DAVIS-2017 video object segmentation | Linear, fine-tuned, and 1% classification accuracy; mIoU; box/mask AP; J&F, J, F |
| **Table 5 · JEPA-T** | Something-Something V2 and Kinetics-400 action recognition; EPIC-KITCHENS-100 action anticipation | Top-1 accuracy; action mcR@5 |
| **Table 6 · JEPA-A** | Two-Room navigation; Reacher; PushT; Cube | Task success and four-task average |
| **Table 7 · JEPA-M** | COCO image–text retrieval; video–language retrieval and classification; AudioSet AS-20K audio–visual event classification | Retrieval R@1; classification accuracy; mAP |
| **Table 8 · JEPA-SC** | ScanObjectNN PB-T50-RS object classification; ShapeNetPart part segmentation | Overall accuracy; instance mIoU |

The numbers come from the original papers. Direct numeric comparisons require matching tasks, data splits, and evaluation protocols; model size, training data, and adaptation can also differ. The site provides a benchmark guide rather than a unified leaderboard.

## Applications

The survey reviews image and spatial understanding, video understanding and anticipation, 3D and structured perception, embodied robotics, autonomous driving, vision–language and multimodal agents, and scientific or sequential data. These applications use predictions differently: some use pretrained features, while others test future states, action effects, or feedback control. Table 9 in the manuscript relates application areas to their typical capability requirements.

## Challenges

The final technical chapter discusses five connected questions: keeping representations useful for prediction; preserving sensitivity to action effects; predicting over long horizons with uncertainty; maintaining objects and relations as scenes change; and checking latent predictions without losing their computational advantage. These are open directions, not capabilities established for all JEPA systems.

## Method collection

The [searchable collection](https://catqing521.github.io/jepa-world-models-survey/dist/#collection) currently contains **26 representative entries** drawn from the manuscript's taxonomy and method discussion. Entries are grouped by family and carry the manuscript citation key. A missing link means the source bibliography did not provide a stable paper URL; it is not a missing paper result. The collection is curated and is not the full bibliography.

To suggest a correction, open an issue with the method name, the manuscript citation key, and a link to the original study. Please identify the specific bibliographic or classification change requested.

## Citation and authors

The paper has not yet been assigned a public arXiv identifier or DOI. This provisional entry identifies the current manuscript; it should be updated after a public record is available:

```bibtex
@misc{song_jepa_world_models_survey,
  title  = {From Joint-Embedding Prediction to World Models: A Survey},
  author = {Song, Ziying and Wang, Qing and Wu, Peiliang and Yang, Hao and Huo, Yanchen and Yang, Lei and Wang, Li and Luo, Yadan and Zhu, Zheng},
  note   = {Manuscript in preparation},
  url    = {https://catqing521.github.io/jepa-world-models-survey/paper/survey.pdf}
}
```

Equal contributors: Ziying Song and Qing Wang. Corresponding author: Peiliang Wu. The full affiliation list appears in the manuscript.

## Repository files

- [`dist/`](./dist/) — static project page and searchable method collection.
- [`paper/survey.pdf`](./paper/survey.pdf) — manuscript PDF supplied by the authors.
- [`index.html`](./index.html) — redirect to the project page for GitHub Pages.

The website works with GitHub Pages from the `main` branch root. For a local preview, serve the repository directory with a static file server, such as `python -m http.server 8000`, then open `http://localhost:8000/`.
