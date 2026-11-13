# From Joint-Embedding Prediction to World Models: A Survey

Companion materials for the survey by Ziying Song, Qing Wang, Peiliang Wu, Hao Yang, Yanchen Huo, Lei Yang, Li Wang, Yadan Luo, and Zheng Zhu.

The survey organizes Joint-Embedding Predictive Architecture (JEPA) methods by their main prediction task and examines the experimental evidence for world-model capabilities. The manuscript is in preparation; this repository does not imply journal acceptance or publication.

## What is here

| Resource | Contents |
| --- | --- |
| [Project page](./dist/index.html) | Taxonomy, R/P/I/C capability levels, benchmark map, and searchable reading list |
| [Reading list](./dist/papers.json) | 26 representative entries from the manuscript's taxonomy table, with citation keys and available paper links |
| [Manuscript PDF](./paper/survey.pdf) | Current 19-page PDF supplied by the authors |

## Survey map

| Family | Main prediction task | Examples from the survey |
| --- | --- | --- |
| **JEPA-F** | Missing representations in a static observation | I-JEPA, DMT-JEPA, SparseJEPA |
| **JEPA-T** | Temporal representations and future states | V-JEPA, V-JEPA 2, MC-JEPA |
| **JEPA-A** | Future latent states conditioned on actions | V-JEPA 2-AC, LeWM, ACT-JEPA |
| **JEPA-M** | Targets across modalities | VL-JEPA, M3-JEPA, AV-JEPA |
| **JEPA-SC** | Points, objects, geometry, and relations | Point-JEPA, 3D-JEPA, Causal-JEPA |

The R/P/I/C lens asks what the reported experiments support: **representation**, **prediction**, **intervention**, and **control**. The five families classify methods; the four levels assess evidence. A method can span more than one family.

## Benchmarks covered

| Family | Datasets or tasks | Metrics |
| --- | --- | --- |
| JEPA-F | ImageNet-1K, ADE20K, COCO, DAVIS-2017 | Top-1, mIoU, AP, J&F |
| JEPA-T | SSv2, K400, EK100 | Top-1, mcR@5 |
| JEPA-A | Two-Room, Reacher, PushT, Cube | Success rate, four-task average |
| JEPA-M | COCO image–text retrieval, video–language benchmarks, AS-20K | R@1, classification accuracy, mAP |
| JEPA-SC | ScanObjectNN PB-T50-RS, ShapeNetPart | OA, instance mIoU |

Results in the manuscript come from the original studies. Matching dataset names and metric names alone do not guarantee identical evaluation conditions.

## Use the website

The site is static. Open [dist/index.html](./dist/index.html) through a local web server so the reading list can load from JSON. From this directory, run:

    python -m http.server 8000

Then open http://localhost:8000/. The root page redirects to the site under dist/. The same root entry can be used with GitHub Pages.

## Reading-list updates

Entries in [dist/papers.json](./dist/papers.json) are selected from the current manuscript's taxonomy table. Each has a family, method name, title, year, manuscript citation key, and, where recorded in the bibliography, a paper URL. An empty URL means that the current bibliography does not provide a link. Please keep any correction tied to the original paper or bibliography entry.

## Citation

The current [manuscript PDF](./paper/survey.pdf) is available. Please cite the released manuscript once an arXiv identifier or DOI is available.
